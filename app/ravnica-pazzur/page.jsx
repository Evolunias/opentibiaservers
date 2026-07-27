import RavnicaPazzurPage, { generateMetadata } from './ravnica-pazzur';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RavnicaPazzurPage />;
}
