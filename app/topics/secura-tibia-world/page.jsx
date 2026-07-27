import SecuraTibiaWorldKeywordPage, { generateMetadata } from './secura-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraTibiaWorldKeywordPage />;
}
