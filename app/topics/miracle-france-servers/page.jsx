import MiracleFranceServersKeywordPage, { generateMetadata } from './miracle-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleFranceServersKeywordPage />;
}
