import ThorniaGermanyServerKeywordPage, { generateMetadata } from './thornia-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaGermanyServerKeywordPage />;
}
