import AlasteraGermanyServerKeywordPage, { generateMetadata } from './alastera-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraGermanyServerKeywordPage />;
}
