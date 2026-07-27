import Grimoria2RubinotPage, { generateMetadata } from './grimoria2-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Grimoria2RubinotPage />;
}
