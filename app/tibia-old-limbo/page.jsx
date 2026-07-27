import TibiaOldLimboPage, { generateMetadata } from './tibia-old-limbo';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOldLimboPage />;
}
