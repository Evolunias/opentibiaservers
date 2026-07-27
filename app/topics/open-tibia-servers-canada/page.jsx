import OpenTibiaServersCanadaKeywordPage, { generateMetadata } from './open-tibia-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersCanadaKeywordPage />;
}
