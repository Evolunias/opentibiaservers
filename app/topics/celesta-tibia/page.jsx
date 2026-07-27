import CelestaTibiaKeywordPage, { generateMetadata } from './celesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaTibiaKeywordPage />;
}
