import MistOfDeathPvpKeywordPage, { generateMetadata } from './mist-of-death-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathPvpKeywordPage />;
}
