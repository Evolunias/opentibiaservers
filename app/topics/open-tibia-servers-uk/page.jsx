import OpenTibiaServersUkKeywordPage, { generateMetadata } from './open-tibia-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersUkKeywordPage />;
}
