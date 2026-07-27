import OpenTibiaServersLatinAmericaKeywordPage, { generateMetadata } from './open-tibia-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersLatinAmericaKeywordPage />;
}
