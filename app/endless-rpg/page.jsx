import EndlessRpgPage, { generateMetadata } from './endless-rpg';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EndlessRpgPage />;
}
