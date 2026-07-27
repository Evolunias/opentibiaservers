import MystianRubinotPage, { generateMetadata } from './mystian-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MystianRubinotPage />;
}
