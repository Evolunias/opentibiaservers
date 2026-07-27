import DeathzotPage, { generateMetadata } from './deathzot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DeathzotPage />;
}
