import RealMapClassicusLoginKeywordPage, { generateMetadata } from './real-map-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusLoginKeywordPage />;
}
