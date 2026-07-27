import MiracleFranceServerKeywordPage, { generateMetadata } from './miracle-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleFranceServerKeywordPage />;
}
