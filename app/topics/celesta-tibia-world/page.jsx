import CelestaTibiaWorldKeywordPage, { generateMetadata } from './celesta-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaTibiaWorldKeywordPage />;
}
