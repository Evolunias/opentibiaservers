import CalmeraTibiaKeywordPage, { generateMetadata } from './calmera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraTibiaKeywordPage />;
}
