import KyraTibiaWorldKeywordPage, { generateMetadata } from './kyra-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KyraTibiaWorldKeywordPage />;
}
