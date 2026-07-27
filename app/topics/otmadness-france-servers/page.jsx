import OtmadnessFranceServersKeywordPage, { generateMetadata } from './otmadness-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessFranceServersKeywordPage />;
}
