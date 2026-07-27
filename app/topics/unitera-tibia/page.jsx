import UniteraTibiaKeywordPage, { generateMetadata } from './unitera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UniteraTibiaKeywordPage />;
}
