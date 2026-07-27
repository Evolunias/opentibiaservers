import SoleraTibiaWorldKeywordPage, { generateMetadata } from './solera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraTibiaWorldKeywordPage />;
}
