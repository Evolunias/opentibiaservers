import SabrehavenPvpeKeywordPage, { generateMetadata } from './sabrehaven-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenPvpeKeywordPage />;
}
