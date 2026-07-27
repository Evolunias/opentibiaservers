import OceraTibiaWorldKeywordPage, { generateMetadata } from './ocera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraTibiaWorldKeywordPage />;
}
