import OpenTibiaServersNorthAmericaKeywordPage, { generateMetadata } from './open-tibia-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersNorthAmericaKeywordPage />;
}
