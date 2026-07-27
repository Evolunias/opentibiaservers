import LowrateBlazeraTibiaKeywordPage, { generateMetadata } from './lowrate-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraTibiaKeywordPage />;
}
