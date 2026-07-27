import Mysteria2Page, { generateMetadata } from './mysteria-2';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Mysteria2Page />;
}
