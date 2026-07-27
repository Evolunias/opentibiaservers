import Grimoria3RubinotPage, { generateMetadata } from './grimoria3-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Grimoria3RubinotPage />;
}
