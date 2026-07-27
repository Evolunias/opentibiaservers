import OceraTibiaKeywordPage, { generateMetadata } from './ocera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraTibiaKeywordPage />;
}
