import SanctumotPage, { generateMetadata } from './sanctumot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SanctumotPage />;
}
