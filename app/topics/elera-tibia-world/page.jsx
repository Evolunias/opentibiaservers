import EleraTibiaWorldKeywordPage, { generateMetadata } from './elera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EleraTibiaWorldKeywordPage />;
}
