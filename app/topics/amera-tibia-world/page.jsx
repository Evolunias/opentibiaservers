import AmeraTibiaWorldKeywordPage, { generateMetadata } from './amera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeraTibiaWorldKeywordPage />;
}
