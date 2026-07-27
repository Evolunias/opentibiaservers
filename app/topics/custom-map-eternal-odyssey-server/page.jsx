import CustomMapEternalOdysseyServerKeywordPage, { generateMetadata } from './custom-map-eternal-odyssey-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapEternalOdysseyServerKeywordPage />;
}
