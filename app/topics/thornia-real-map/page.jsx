import ThorniaRealMapKeywordPage, { generateMetadata } from './thornia-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaRealMapKeywordPage />;
}
