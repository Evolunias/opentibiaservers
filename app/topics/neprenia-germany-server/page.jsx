import NepreniaGermanyServerKeywordPage, { generateMetadata } from './neprenia-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaGermanyServerKeywordPage />;
}
