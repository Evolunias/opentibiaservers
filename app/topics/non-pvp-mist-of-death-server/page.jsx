import NonPvpMistOfDeathServerKeywordPage, { generateMetadata } from './non-pvp-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpMistOfDeathServerKeywordPage />;
}
