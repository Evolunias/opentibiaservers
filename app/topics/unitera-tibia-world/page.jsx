import UniteraTibiaWorldKeywordPage, { generateMetadata } from './unitera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UniteraTibiaWorldKeywordPage />;
}
