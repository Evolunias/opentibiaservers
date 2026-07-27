import SameraPage, { generateMetadata } from './samera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraPage />;
}
