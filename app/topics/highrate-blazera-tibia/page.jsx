import HighrateBlazeraTibiaKeywordPage, { generateMetadata } from './highrate-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraTibiaKeywordPage />;
}
