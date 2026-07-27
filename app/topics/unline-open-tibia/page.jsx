import UnlineOpenTibiaKeywordPage, { generateMetadata } from './unline-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineOpenTibiaKeywordPage />;
}
