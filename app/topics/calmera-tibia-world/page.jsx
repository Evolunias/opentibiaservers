import CalmeraTibiaWorldKeywordPage, { generateMetadata } from './calmera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraTibiaWorldKeywordPage />;
}
