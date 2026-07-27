import TibiaRebornPage, { generateMetadata } from './tibia-reborn';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRebornPage />;
}
