import MistOfDeathFranceServersKeywordPage, { generateMetadata } from './mist-of-death-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathFranceServersKeywordPage />;
}
