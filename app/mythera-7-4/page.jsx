import Mythera74Page, { generateMetadata } from './mythera-7-4';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Mythera74Page />;
}
