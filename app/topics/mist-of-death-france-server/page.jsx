import MistOfDeathFranceServerKeywordPage, { generateMetadata } from './mist-of-death-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathFranceServerKeywordPage />;
}
