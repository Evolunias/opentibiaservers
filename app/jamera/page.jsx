import JameraPage, { generateMetadata } from './jamera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraPage />;
}
