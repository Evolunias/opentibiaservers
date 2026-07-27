import MidhemPage, { generateMetadata } from './midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemPage />;
}
