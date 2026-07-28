import BanicjaPage, { generateMetadata } from './banicja';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BanicjaPage />;
}
