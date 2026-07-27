import QuinteraTibiaWorldKeywordPage, { generateMetadata } from './quintera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <QuinteraTibiaWorldKeywordPage />;
}
