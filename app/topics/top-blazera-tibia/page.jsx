import TopBlazeraTibiaKeywordPage, { generateMetadata } from './top-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraTibiaKeywordPage />;
}
