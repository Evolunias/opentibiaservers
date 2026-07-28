import RunesOfSoulPage, { generateMetadata } from './runes-of-soul';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RunesOfSoulPage />;
}
