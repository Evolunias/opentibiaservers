import NovaTibiaWorldKeywordPage, { generateMetadata } from './nova-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaTibiaWorldKeywordPage />;
}
